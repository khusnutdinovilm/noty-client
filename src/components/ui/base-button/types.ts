type BtnType = "primary" | "secondary" | "danger";

export interface IBaseButtonProps {
  labelText?: string;
  btnType?: BtnType;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}
