import {makeAutoObservable} from "mobx";

export default class  ProjectsStore {
    constructor() {
        this._projects = [
            {id: '1', title: 'Проект 1', description: 'Описание 1', manCountCurrent: '5', users_limit: '5', skills: ['skill 1', 'skill 2', 'skill 3']},
            {id: '2', title: 'Проект 2', description: 'Описание 2', manCountCurrent: '4', users_limit: '5', skills: ['skill 1', 'skill 2']},
            {id: '3', title: 'Проект 3', description: 'Описание 3', manCountCurrent: '3', users_limit: '5', skills: ['skill 1']}
        ]
        makeAutoObservable(this);
    }

    setProjects(projects) {
        this._projects = projects;
    }

    get Projects() {
        return this._projects;
    }
}