import {makeAutoObservable} from "mobx";
import Robot from "../img/robot_original.jpg";

export default class  ProjectsStore {
    constructor() {
        this._articles = [
            {id: 1, title: "Статья 1", text: "Описание 1", img: {Robot}},
            {id: 2, title: "Статья 2", text: "Описание 2", img: {Robot}},
            {id: 3, title: "Стятья 3", text: "Описание 3", img: {Robot}}
        ];
        this._partners = [
            'partner image source 1',
            'partner image source 2',
            'partner image source 3'
        ];
        makeAutoObservable(this);
    }

    setArticles(articles) {
        this._articles = articles;
    }
    setPartners(partners) {
        this._partners = partners;
    }

    get Articles() {
        return this._projects;
    }
    get Partners() {
        return this._partners;
    }
}