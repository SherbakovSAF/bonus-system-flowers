import type { ClientInfo } from "@/interfaces";

export interface StateType {
  clientStorage: ClientInfo[];
  selectedClient: ClientInfo | null;
  newClientNumber: string;
  modalInfo: {
    isActive: boolean;
    text: string;
    type: string;
    callBack: (() => void) | null;
  };
}

export interface RootState extends StateType {
  // Дополнительные свойства состояния, если есть
}

