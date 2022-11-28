export interface OficinaCardProps {
  Id: string;
  Foto: string;
  Nome: string;
  Descricao: string;
  DescricaoCurta: string;
  Endereco: string;
  Email: string;
  Telefone1: string;
  Telefone2: string;
}

export interface DetailsCardProps {
  title: string;
  icon: "Email" | "Localizacao" | "Telefone";
}

export interface FormDataProps {
  nome: string;
  telefone: string;
  email: string;
}
