import SystemPart from '../components/system/SystemPart'
import LrcManagePart from '../components/system/LrcManagePart'

export default {
  path: '/system',
  component:   SystemPart,
  redirect: '/system/lrc',
  children: [
    {path: '/system/lrc', component: LrcManagePart},
  ]
}