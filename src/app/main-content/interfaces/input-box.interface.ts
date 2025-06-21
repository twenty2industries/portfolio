export interface InputBoxData {
  subject: string;

  backgroundImage: {
    path: string;
    alt: string;
  };
  userName?: string; // Ersetzt "?feedback User Name"
  learning?: {
    iconPath: string;
    language: string; // Ersetzt "currentlyLearningLanguages"
  }[];

  inputText: string[]; // Ersetzt "TEXT INPUT" Liste
  linkedInProfile?: string; // Ersetzt "?Linked in Profile"
}
