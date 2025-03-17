type BaseInputType = "text" | "password";
export interface IBaseInputProps {
  id: string;
  labelText?: string;
  placeholder?: string;
  type?: BaseInputType;
}
