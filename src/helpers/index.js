import { collatedTasks } from "../constants/index"

export const collactedTasksExist = selectedProject => {
    return collatedTasks.find(task => task.key == selectedProject)
}
