import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = 'your-secret-key';

  issuanceTokens() {
    const payload = { id: 1}
    const token = jwt.sign(payload, this.JWT_SECRET, { expiresIn: '1h' })
    return token
  }

  validateToken(token: string): any {
    try {
      return jwt.verify(token, this.JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
}
