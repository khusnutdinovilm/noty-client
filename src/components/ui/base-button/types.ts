type BtnType = "primary" | "secondary" | "danger";

export interface IBaseButtonProps {
  labelText?: string;
  btnType?: BtnType;
  loading?: boolean;
}
