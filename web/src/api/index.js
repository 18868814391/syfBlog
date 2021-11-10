import service from '@/libs/request'
import service2 from '@/libs/request2'

export function register(params) { return service({ url: '/login/register.php', method: 'post', data: params }) }// 注册
export function loginIN(params) { return service({ url: '/login/login.php', method: 'post', data: params }) }// 登陆
export function levelGet(params) { return service({ url: '/login/level.php', method: 'post', data: params }) }// 权限
export function UploadTxt(params) { return service({ url: '/upload/fileUpload.php', method: 'post', data: params }) }// 文件上传
export function getFile(params) { return service({ url: '/upload/getFile.php', method: 'post', data: params }) }// 文件下载
export function UploadRichTxt(params) { return service({ url: '/upload/richTxtUpload.php', method: 'post', data: params }) }// 富文本上传
export function BlogRichTxt(params) { return service({ url: '/upload/BlogRichTxt.php', method: 'post', data: params }) }// blog上传
export function BlogList(params) { return service({ url: '/upload/BlogList.php', method: 'post', data: params }) }// blog列表
export function blogDetail(params) { return service({ url: '/upload/BlogDetail.php', method: 'post', data: params }) }// blog详情
export function lightNovelList(params) { return service({ url: '/novel/lightNovelList.php', method: 'post', data: params }) }// 获取轻小说列表
export function getlightNovel(params) { return service({ url: '/novel/getNovel.php', method: 'post', data: params }) }// 获取轻小说内容
export function getheavyNovel(params) { return service({ url: '/novel/heavyNovelList.php', method: 'post', data: params }) }// 获取重小说章节
export function getMircleDetail(params) { return service({ url: '/novel/mircleDetail.php', method: 'post', data: params }) }// 获取重小说内容
export function getMusic(params) { return service({ url: '/media/music.php', method: 'post', data: params }) }// 获取音乐名字
export function getAnime(params) { return service({ url: '/media/anime.php', method: 'post', data: params }) }// 获取动画
export function sendFoot(params) { return service({ url: '/interaction/footprint.php', method: 'post', data: params }) }// 发送留言
export function getFoot(params) { return service({ url: '/interaction/footList.php', method: 'post', data: params }) }// 获取留言
export function yiiBlogAdd(params) { return service({ url: '/yii/web/index.php?r=blog/more', method: 'post', data: params }) }// yii新增博客
export function yiiBlogSearch(params) { return service({ url: '/yii/web/index.php?r=blog/search', method: 'post', data: params }) }// yii博客搜索
export function yiiRegister(params) { return service({ url: '/yii/web/index.php?r=user/register', method: 'post', data: params }) }// yii注册
export function yiiLogin(params) { return service({ url: '/yii/web/index.php?r=user/login', method: 'post', data: params }) }// yii登陆
export function yiiSocketIn(params) { return service({ url: '/yii/web/index.php?r=socketdata/addmessage', method: 'post', data: params }) }// yii socket消息存入
export function yiiSocketmsg(params) { return service({ url: '/yii/web/index.php?r=socketdata/getmessage', method: 'post', data: params }) }// yii socket消息历史
export function yiiMad(params) { return service({ url: '/yii/web/index.php?r=common/getmad', method: 'post', data: params }) }// yii 获取MAD
export function yiiBlogTab(params) { return service({ url: '/yii/web/index.php?r=blog/tabs', method: 'post', data: params }) }// yii 获取blog标签数
export function yiiSaveDood(params) { return service({ url: '/yii/web/index.php?r=common/savedood', method: 'post', data: params }) }// yii 涂鸦保存
export function yiiGetDood(params) { return service({ url: '/yii/web/index.php?r=common/getdood', method: 'post', data: params }) }// yii 获取涂鸦
export function nodeMad(params) { return service2({ url: '/node/mad', method: 'post', data: params }) }// nodeMad
export function wxsign(params) { return service({ url: '/wechat/access.php', method: 'post', data: params }) }// 微信签名
// http://www.shenyifan.top/apis/syf/php/wechat/access.php

