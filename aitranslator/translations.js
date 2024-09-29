import { Translate } from 'translate-google-api'

export async function translate(lang, value){
    return await Translate(lang, 'pl', value);
}