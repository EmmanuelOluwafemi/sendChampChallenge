import { atom } from "recoil";

export const navState = atom({
    key: 'repo',
    default: "large"
  })

export const sidebarState = atom({
    key: 'sidebar',
    default: false
})

export const modalState = atom({
  key: 'modal',
  default: ''
})