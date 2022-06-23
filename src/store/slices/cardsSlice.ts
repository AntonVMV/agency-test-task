import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICardsState, CardObj } from "./types";

interface ImageData {
  image: string;
  title: string;
}

export const imagesRequest = createAsyncThunk<
  CardObj[],
  undefined,
  { rejectValue: string }
>("cards/imageRequest", async (_, thunkApi) => {
  try {
    const response = await fetch(
      `https://62b364994f851f87f45a3dc6.mockapi.io/Test`
    );
    const result = (await response.json()) as ImageData[];

    const tags = ["Branding", "Design", "Motion", "Illustration"];

    const cards: CardObj[] = result.map((item) => {
      // Т.к. при нажатии на кнопнк 'Load more' подгружатся те же картинки, id решил сгенерировать, чтобы не совпадали,
      // обычно random для id не использую)) Теги тоже же рандомно присвоил.
      return {
        title: item.title + " " + Math.floor(Math.random() * 100),
        image: item.image,
        tag: tags[Math.floor(Math.random() * tags.length)],
        id: Math.random() * 10,
      };
    });

    return cards;
  } catch (e) {
    if (e instanceof Error) {
      return thunkApi.rejectWithValue(e.message);
    } else {
      return thunkApi.rejectWithValue("Unknown Error");
    }
  }
});

const initialState: ICardsState = {
  data: [],
  loading: false,
  error: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    removeCard: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(imagesRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(imagesRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.push(...action.payload);
      })
      .addCase(imagesRequest.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default cardsSlice.reducer;

export const { removeCard } = cardsSlice.actions;
