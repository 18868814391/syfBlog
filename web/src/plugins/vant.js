import Vue from 'vue'
import {
  // 基础组件
  Button,
  Cell,
  CellGroup,
  Icon,
  Image,
  Row,
  Col,
  Popup,
  // 表单组件
  Form,
  Checkbox,
  CheckboxGroup,
  DatetimePicker,
  Field,
  NumberKeyboard,
  // PasswordInput,//密码输入框
  //   NumberKeyboard,
  Picker,
  RadioGroup,
  Radio,
  Rate,
  Search,
  // Slider,//滑块
  // Stepper,//步进器
  Switch,
  // SwitchCell,
  Uploader,
  // 反馈组件
  ActionSheet,
  Dialog,
  DropdownMenu,
  DropdownItem,
  Loading,
  Notify,
  Overlay,
  PullRefresh,
  SwipeCell,
  Toast,
  // 展示组件
  // Circle,//环形进度条
  Collapse,
  CollapseItem,
  // CountDown,//倒计时
  Divider,
  ImagePreview,
  Lazyload,
  List,
  NoticeBar,
  // Panel,//面板
  // Progress,//进度条
  // Skeleton,//骨架屏
  // Step, //步骤条
  // Steps,
  Sticky,
  Swipe,
  SwipeItem,
  Tag,
  // 导航组件
  Grid,
  GridItem,
  IndexBar,
  IndexAnchor,
  NavBar,
  Pagination,
  Sidebar,
  SidebarItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  TreeSelect,
  // 业务组件摒弃不用
  Area
} from 'vant'

// 基础组件
Vue.use(Button)
Vue.use(Cell).use(CellGroup)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Row).use(Col)
Vue.use(Popup)
// 表单组件
Vue.use(Form)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(DatetimePicker)
Vue.use(Field)
Vue.use(NumberKeyboard)
// Vue.use(PasswordInput).use(NumberKeyboard)
Vue.use(Picker)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Rate)
Vue.use(Search)
// Vue.use(Slider);
Vue.use(Switch)
// Vue.use(SwitchCell)
Vue.use(Uploader)
// 反馈组件
Vue.use(ActionSheet)
Vue.use(Dialog)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Loading)
Vue.use(Notify)
Vue.use(Overlay)
Vue.use(PullRefresh)
Vue.use(SwipeCell)
Vue.use(Toast)
// 展示组件
// Vue.use(Circle)
Vue.use(Collapse).use(CollapseItem)
// Vue.use(CountDown)
Vue.use(Divider)
Vue.use(ImagePreview)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(NoticeBar)
// Vue.use(Panel)
// Vue.use(Progress)
// Vue.use(Skeleton)
// Vue.use(Step).use(Steps)
Vue.use(Sticky)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tag)
// 导航组件
Vue.use(Grid).use(GridItem)
Vue.use(IndexBar).use(IndexAnchor)
Vue.use(NavBar)
Vue.use(Pagination)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Tab).use(Tabs)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(TreeSelect)
// 业务组件摒弃不用
Vue.use(Area)
