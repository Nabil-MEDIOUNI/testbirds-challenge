export interface CardInterface {
  id: string;
  city: string;
  icon: string;
  temp: number;
}

export interface ModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
  handleCancel: () => void;
  addWeather: any;
}
