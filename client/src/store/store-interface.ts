import type { ClientInfo } from "@/interfaces";

export interface StateType {
  clientStorage: ClientInfo[];
  selectedClient: ClientInfo | {};
}

export interface RootState extends StateType {
  // Дополнительные свойства состояния, если есть
}

