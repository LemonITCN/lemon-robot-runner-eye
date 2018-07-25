import TaskContainer from '../components/task/TaskContainer'
import InstructionSetPart from '../components/task/InstructionSetPart'
import DataSetPart from '../components/task/DataSetPart'

export default {
  path: '/task',
  component: TaskContainer,
  redirect: '/task/instruction',
  children: [
    {path: '/task/instruction', component: InstructionSetPart},
    {path: '/task/data', component: DataSetPart}
  ]
}