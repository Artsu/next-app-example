import 'server-only'
import {Lang} from "@/common/types";

const dictionaries = {
    fi: () => import('@/dictionaries/fi.json').then((module) => module.default),
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    se: () => import('@/dictionaries/se.json').then((module) => module.default),
}

export const getDictionary = async (locale: Lang) => dictionaries[locale]()