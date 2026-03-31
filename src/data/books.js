import { ref } from "vue";
import booksJSON from "@/data/books.json";

export const books = ref([...booksJSON]);
