import Identity from "./../windows/Identity"
import Experience from "./../windows/Experience"
import Jobs from "./../windows/Jobs"
import Stack from "./../windows/Stack"
import Hobby from "./../windows/Hobby"

import contact from "./OpenContact"

const manager = {
    ...contact,
    openIdentityBindThis() {
        const data = {
            uuid: "identity",
            title: "title_identity",
            component: <Identity />,
        }

        this.props.addWindow(data)
    },
    openJobsBindThis() {
        const data = {
            uuid: "jobs",
            title: "title_jobs",
            component: <Jobs />,
            options: {
                minSize: [600, 400],
            },
        }

        this.props.addWindow(data)
    },

    openExperienceBindThis() {
        const data = {
            uuid: "xp",
            title: "title_experience",
            component: <Experience />,
            options: {
                minSize: [665, 350],
            },
        }

        this.props.addWindow(data)
    },

    openStackBindThis() {
        const data = {
            uuid: "stack",
            title: "title_stack",
            component: <Stack />,
            options: {
                minSize: [930, 350],
            },
        }

        this.props.addWindow(data)
    },

    openHobbyBindThis() {
        const data = {
            uuid: "title_hobby",
            title: "Hobby",
            component: <Hobby />,
        }

        this.props.addWindow(data)
    },
}

export default manager
