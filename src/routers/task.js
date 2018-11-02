import TaskContainer from '../components/task/TaskContainer'
import ParameterPart from '../components/task/ParameterPart'
import InstructionSetPart from '../components/task/InstructionSetPart'
import PluginUsagePart from '../components/task/PluginUsagePart'

export default {
  path: '/task',
  component: TaskContainer,
  redirect: '/task/instruction',
  children: [
    {path: '/task/parameter', component: ParameterPart},
    {path: '/task/instruction', component: InstructionSetPart},
    {path: '/task/plugin', component: PluginUsagePart},
  ]
}