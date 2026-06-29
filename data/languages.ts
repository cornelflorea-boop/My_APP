import { Language } from "../types/learning";

export const LANGUAGES: Language[] = [
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/32/es.png",
    isAvailable: true,
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/32/fr.png",
    isAvailable: true,
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/32/de.png",
    isAvailable: true,
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "https://flagcdn.com/32/it.png",
    isAvailable: false,
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "https://flagcdn.com/32/pt.png",
    isAvailable: false,
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/32/ja.png",
    isAvailable: false,
  },
];

export const AVAILABLE_LANGUAGES = LANGUAGES.filter((l) => l.isAvailable);

export function getLanguageByCode(code: string): Language | undefined {
  return LANGUAGES.find((l) => l.code === code);
}
