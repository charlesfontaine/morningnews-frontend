import CreateSlice from '@reduxjs/toolkit';

const initialState = {
  value: []
}

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: { // fonctions permettant de manipuler cet état
    addBookmark: (state, action) => { // state: permet d'accéder à la valeur de notre état, action: permet d'accéder à la valeur que l'on récupère au moment de l'appel de la fonction, la valeur attendue, c'est ce que l'on mettra dans les parenthèses de la fonction addBookmark dans le composant où l'on va l'utiliser
      state.value.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.value = state.value.filter(bookmark => bookmark.title !== action.payload.title) // bookmarks: s'attend à récupérerun objet qui correspond à l'article
    }
  }
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;