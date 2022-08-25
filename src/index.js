import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import axios from 'axios';
import { fetchImages } from './js/fatch-images';

const inputSearch = document.querySelector('input[name="searchQuery"]');
const button = document.querySelector('button');
const form = document.querySelector('.search-form');

form.addEventListener('submit', onRequestProgress);

function onRequestProgress() {}
