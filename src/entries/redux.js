import {
  createStore
} from 'redux';

const $form = document.getElementById('form');
const ADD_SONG = 'ADD_SONG';

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title')
  console.log(data, title);
  store.dispatch({
    type: ADD_SONG,
    payload: {
      title
    }
  })
}

const initialState = [{
    title: 'One'
  },
  {
    title: 'Orion'
  },
  {
    title: 'Her'
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_SONG:
      return [...state, action.payload]
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function render() {
  const $container = document.getElementById('playlist');
  $container.innerHTML = '';
  const playlist = store.getState();

  playlist.forEach((item) => {
    const template = document.createElement('p');
    template.textContent = item.title
    $container.appendChild(template);
  });
}

const handleChange = () => {
  render();
}

store.subscribe(handleChange)

render();