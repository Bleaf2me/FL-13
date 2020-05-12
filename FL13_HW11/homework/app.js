const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

let renderTree = function (tree) {
  let e, html;
  html = '<ul>';
  for (let i = 0; i < tree.length; i++) {
    e = tree[i];

    if (e.folder) {
      html += '<li class="folder">' + e.title;
    } else {
      html += '<li class="file">' + e.title;
    } 

    if (e.children) {
      html += renderTree(e.children);
    } else if (e.folder) {
      e.children = html += '<ul class = "nopadding"><li>Folder is empty</li></ul>';
    }

    html += '</li>';
  }
  html += '</ul>';
  return html;
};

rootNode.innerHTML = renderTree(data);

rootNode.onclick = function (event) {
  let childrenContainer = event.target.parentNode.querySelector('ul');

  if (childrenContainer) {
    childrenContainer.hidden = !childrenContainer.hidden;
  }
};

for (let li of rootNode.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling);
}

for (let l1 of rootNode.querySelectorAll('li')) {
  let i = document.createElement('i');
  let clas = l1.className;

  if (clas === 'folder') {
    i.textContent = 'folder';
    i.classList.add('material-icons');
    i.classList.add('yel');
    } else if (clas === 'file') {

      i.textContent = 'insert_drive_file';
      i.classList.add('material-icons');
      i.classList.add('grey');
  }
  l1.prepend(i);
}

let hide = document.querySelectorAll('#root > ul ul');

hide.forEach((elem) => {
  elem.setAttribute('hidden', true);
});

let div = document.createElement('div');
div.className = 'right-click-menu';

let liLast = document.createElement('div');
liLast.className = 'button1';
liLast.innerHTML = 'Rename';
div.append(liLast); 

let liLast2 = document.createElement('div');
liLast2.className = 'button2';
liLast2.innerHTML = 'Delete item';
div.append(liLast2);

document.body.append(div);

const menu = document.querySelector('.right-click-menu');

rootNode.addEventListener('contextmenu', event => {
  event.preventDefault();
  menu.style.top = `${event.clientY}px`;
  menu.style.left = `${event.clientX}px`;
  menu.classList.add('active');
  let item = event.target;
  let del = item.closest('li');
  
  document.addEventListener('click', event => {
    const buttunNumber = 2;

    if (event.button !== buttunNumber) {
      menu.classList.remove('active');
    }
  }, false);

  menu.addEventListener('click', event => {
    event.stopPropagation();
  }, false);

  document.querySelector('.button1').addEventListener('click', () => {
    let el = event.target.closest('span');

    if (!el) {
      menu.classList.remove('active');
      return;
    }

    el.setAttribute('contenteditable', true);
    menu.classList.remove('active');
    const range = document.createRange();
    const selection = window.getSelection();
    const dotIndex = el.innerText.indexOf('.') > 0 ? el.innerText.indexOf('.') : el.innerText.length;
    range.setStart(el, 0);
    range.setEnd(el.firstChild, dotIndex);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);

  document.querySelector('.button2').addEventListener('click', () => {

    if (del){
      del.remove();
    } else {
      menu.classList.remove('active');
      return;
    }

  }, false);
}, false);

document.addEventListener('click', () => {
  document.querySelectorAll('span').forEach((el) => el.setAttribute('contenteditable', false));
});