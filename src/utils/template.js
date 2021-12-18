import { STRING } from '../constants/constants.js';

export const headerTemplate = () => {
  return `
   <header>
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button id="crew-tab">크루 관리</button>
        </li>
        <li>
          <button id="team-tab">팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
  </header>
  <main></main>
  `;
};

export const selectCourseTemplate = () => {
  return `
    <section>
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input id="frontend-course" type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input id="backend-course" type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
      </div>
    </section>
  `;
};

export const crewManageTemplate = (crews, course) => {
  return `
    ${crewInputTemplate(course)}
    <section >
      <h3>${course} 크루 목록</h3>
      <table id="crew-table" border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${crewTableTemplate(crews)}
        </tbody>
      </table>
    </section>
    `;
};

export const crewTableTemplate = (crews) => {
  return `
    ${
      crews &&
      crews
        .map((crew, idx) => {
          return `
              <tr>
                <td>${idx + 1}</td>
                <td>${crew.name}</td>
                <td><button id="delete-crew-button">삭제</button>
                </td>
              </tr>
            `;
        })
        .join(STRING.EMPTY)
    }
  `;
};

export const crewInputTemplate = (course) => {
  return `
    <section id="crew-manage-section">
      <h3>${course} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <button id="add-crew-button">확인</button>
      </form>
    </section>
  `;
};

export const selectCourseMissionTemplate = () => {
  return `
    <section>
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          <option value="frontend">프론트엔드</option>
          <option value="backend">백엔드</option>
        </select>
        <select id="mission-select">
          <option value="baseball>숫자야구게임</optionv>
          <option value="racingcar">자동차경주</option>
          <option value="lotto">로또</option>
          <option value="shoppping-cart">장바구니</option>
          <option value="payments">결제</option>
          <option value="subway">지하철노선도</option>
          <option value="performance">성능개선</option>
          <option value="deploy">배포</option>
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
    </section>
  `;
};
