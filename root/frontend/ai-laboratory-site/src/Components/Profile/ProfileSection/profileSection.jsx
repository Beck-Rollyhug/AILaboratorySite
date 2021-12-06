import React from "react";
import n from "./profileSection.module.css";

const ProfileSection = () => {
  return(
      <section className={n.mainMenu}>
          <div className={n.containerMenu}>
              <div className={n.userProfile}>
                  <h1 className={n.name}>Иванов Иван Иванович</h1>
                  <p>УрФУ имени первого Президента России Б.Н.Ельцина
                      Программная Инженерия, 2й курс, РИ-290034</p>
                  <br/>
                      <p>Почта: email@mail.ru</p>
                      <p>Номер: +79123456789</p>
                      <p>@telegram_profile</p>
                      <a className={n.btnn} href="settingsProfile.html">НАСТРОИТЬ</a>
              </div>
              <h2 className={n.listFullProjects}>ПРОЕКТЫ</h2>
              <div className={n.projectsPanel}>
                  <div className={n.project}>
                      <h3>Разработка динамической карты погоды на 3D-модели Земли</h3>
                      <p className={n.description}>В данном проекте нужно связать нашу БД с заготовленной 3D-моделю Земли,
                          чтобы отображать на ней облачность, температуру и осадки.</p>
                      <div className={n.footerTitle}>
                          <div className={n.skills}>
                              <span className={n.PostreSQL}>PostreSQL</span>
                              <span className={n.Python}>Python</span>
                              <span className={n.AutodeskMaya2020}>Autodesk Maya 2020</span>
                          </div>
                          <div className={n.manCount}>4 / 5</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default ProfileSection;