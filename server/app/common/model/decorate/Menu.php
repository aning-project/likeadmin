<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\common\model\decorate;


use app\common\enum\DefaultEnum;
use app\common\enum\MenuEnum;
use app\common\model\BaseModel;
use app\common\model\goods\GoodsCategory;
use think\model\concern\SoftDelete;

class Menu extends BaseModel
{
    use SoftDelete;

    protected $deleteTime = 'delete_time';


    /**
     * @notes 链接地址
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2022/2/14 2:18 下午
     */
    public function getLinkAddressDescAttr($value, $data)
    {
        $address = '';
        if ($data['link_type'] == MenuEnum::LINK_CUSTOM) {
            $address = $data['link_address'];
        } elseif ($data['link_type'] == MenuEnum::LINK_SHOP) {
            $shop_page = array_column(MenuEnum::SHOP_PAGE, NULL, 'index');
            $address = $shop_page[$data['link_address']]['name'];
        } elseif ($data['link_type'] == MenuEnum::LINK_CATEGORY) {
//            $name = GoodsCategory::where('id', $data['link_address'])->value('name');
//            $address = $name;
        }
        return $address;
    }

    /**
     * @notes 状态
     * @param $value
     * @param $data
     * @return string|string[]
     * @author ljj
     * @date 2022/2/14 4:03 下午
     */
    public function getStatusDescAttr($value, $data)
    {
        return DefaultEnum::getEnableDesc($data['status']);
    }


    /**
     * @notes 菜单链接
     * @param $value
     * @param $data
     * @return mixed|string
     * @author ljj
     * @date 2022/2/23 2:50 下午
     */
    public function getLinkAttr($value, $data)
    {
        $link = '';
        if ($data['link_type'] == MenuEnum::LINK_CUSTOM || $data['link_type'] == MenuEnum::LINK_CATEGORY) {
            $link = $data['link_address'];
        } elseif ($data['link_type'] == MenuEnum::LINK_SHOP) {
            $shop_page = array_column(MenuEnum::SHOP_PAGE, NULL, 'index');
            $link = $shop_page[$data['link_address']]['path'];
        }
        return $link;
    }
}