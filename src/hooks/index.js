import React, { useState, useEffect } from 'react';
import firebase from "../firebase"
import moment from 'moment';
import { collatedTasksExist } from "../helpers/index"

const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', '98db973kwl8xp1lz94k');

        unsubscribe =
            // if selectedProject does not exist in collatedTasksExist,
            selectedProject && !collatedTasksExist(selectedProject) ?
                // go and get me one.
                (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                // if the selectedProject is 'TODAY', 
                : selectedProject === 'TODAY'
                    // go and get the data where date == today.
                    ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
                    // if the selectedProject is 'INBOX' or 0
                    : selectedProject === 'INBOX' || selectedProject === 0
                        // go and get data where date == ''.
                        ? (unsubscribe = unsubscribe.where('date', '==', ''))
                        // else if selectedProject exist in collatedTasksExist, unsubscribe dont need change
                        : unsubscribe;

    }, [selectedProject]);
}

export { useTasks };







