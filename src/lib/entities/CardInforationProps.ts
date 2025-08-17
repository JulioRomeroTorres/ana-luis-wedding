interface BoxInformation {
  icon: React.ReactNode;
  text: string;
}

export type CardInformationType = "location" | "event" | "dressCode"

export interface CardInforationProps {
  title: string;
  type: CardInformationType;
  icon: React.ReactNode;
  desktopUrl: string;
  mobileUrl: string;
  informationList: BoxInformation[]
}