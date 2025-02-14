
import { useState, useEffect } from 'react';
import { generateGmailAccount, generatePassword } from '../utils/generateCredentials';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  });

  const generateNewCredentials = () => {
    setCredentials({
      login: generateGmailAccount(),
      password: generatePassword()
    });
  };

  useEffect(() => {
    generateNewCredentials();
    const interval = setInterval(generateNewCredentials, 60000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text: string, type: 'login' | 'password') => {
    await navigator.clipboard.writeText(text);
    toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} copiado`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">CONTAS GEMADAS</h1>
          <p className="text-sm text-gray-600 mb-8">
            liberando contas em momentos aleatórios do dia, então 
            fique esperto e seja rápido
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">login:</div>
                <div className="font-mono text-gray-900">{credentials.login}</div>
              </div>
              <button
                onClick={() => copyToClipboard(credentials.login, 'login')}
                className="ml-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Copiar login"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Senha:</div>
                <div className="font-mono text-gray-900">{credentials.password}</div>
              </div>
              <button
                onClick={() => copyToClipboard(credentials.password, 'password')}
                className="ml-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Copiar senha"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-8">
          <p className="text-red-500 font-medium text-center text-sm">
            ATENÇÃO: Todas as contas são via GOOGLE
          </p>
          
          <p className="text-gray-600 text-center text-sm">
            (ao pegar a conta troque todos os meios possíveis de recuperação.)
          </p>

          <button
            onClick={generateNewCredentials}
            className="w-full py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            SEGUIR CRIADOR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
