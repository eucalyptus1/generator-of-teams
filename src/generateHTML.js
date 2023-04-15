function generateHTML(data) {
  if (data.manager) {
    role = `Manager`;
    empName = manager.name;
    id = manager.id;
    offGitSchool = `Office Number: ${manOffice}`;
  } else if (data.engineer) {
    role = `Engineer`;
    empName = engineer.name;
    id = engineer.id;
    offGitSchool = `Github: ${git}`;
  } else if (data.intern) {
    role = `Intern`;
    empName = intern.name;
    id = intern.id;
    offGitSchool = `School: ${school}`;
  }
}

function generateManager() {
  <div>
    <h2>${role}</h2>
    <h3>${empName}</h3>
    <div>
      <ul>
        <li>Id: ${id}</li>
        <li>E-mail: ${email}</li>
        <li>${offGitSchool}</li>
      </ul>
    </div>
  </div>;
}

// function generateEngineer() {}

// function generateIntern() {}

module.exports = (templateData) => {
  // destructure page data by section
  templateData.map((teamArr) => {
    const employee = teamArr.employee;
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>The Pirate Monkeys</title>
    </head>
    
    <body>
        <header>
          <h1>TEAM</h1>
        </header>
     
      <main>
        ${generateManager(data.manager)}
      </main>
    </body>
    </html>
    `;
};

module.exports = generateHTML;
