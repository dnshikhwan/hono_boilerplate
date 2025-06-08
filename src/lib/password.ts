// managing passwords

export class PasswordService {
  static hash = async (password: string): Promise<string> => {
    return Bun.password.hash(password);
  };

  static verify = async (password: string, hash: string): Promise<boolean> => {
    return Bun.password.verify(password, hash);
  };
}
