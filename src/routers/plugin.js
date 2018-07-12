import PluginContainer from '../components/plugin/PluginContainer'
import PluginInstalledPartContainer from '../components/plugin/PluginInstalledPartContainer'
import PluginStorePartContainer from '../components/plugin/PluginStorePartContainer'

export default {
  path: '/plugin',
  component: PluginContainer,
  redirect: '/plugin/installed',
  children: [
    {path: '/plugin/installed', component: PluginInstalledPartContainer},
    {path: '/plugin/store', component: PluginStorePartContainer}
  ]
}