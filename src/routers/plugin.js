import PluginPart from '../components/plugin/PluginPart'
import PluginInstalledPart from '../components/plugin/PluginInstalledPart'
import PluginStorePart from '../components/plugin/PluginStorePart'

export default {
  path: '/plugin',
  component: PluginPart,
  redirect: '/plugin/installed',
  children: [
    {path: '/plugin/installed', component: PluginInstalledPart},
    {path: '/plugin/store', component: PluginStorePart}
  ]
}