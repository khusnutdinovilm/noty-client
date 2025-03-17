type BtnType = "primary" | "secondary" | "danger" | "terciary-primary" | "terciary-danger";

export interface IBaseButtonProps {
  labelText?: string;
  btnType?: BtnType;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}
