import { createSlice } from '@reduxjs/toolkit';

export const addNewContact = createSlice('contact/addNewContact');

export const deleteContact = createSlice('contact/deleteContact');

export const setFilter = createSlice('filter/setFilter');