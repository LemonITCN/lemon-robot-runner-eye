import TaskContainer from '../components/task/TaskContainer'
import InstructionSetPart from '../components/task/InstructionSetPart'
import PluginUsagePart from '../components/task/PluginUsagePart'
import DataSetPart from '../components/task/DataSetPart'

export default {
  path: '/task',
  component: TaskContainer,
  redirect: '/task/instruction',
  children: [
    {path: '/task/instruction', component: InstructionSetPart},
    {path: '/task/plugin', component: PluginUsagePart},
    {path: '/task/data', component: DataSetPart}
  ]
}