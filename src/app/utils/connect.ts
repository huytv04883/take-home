interface CustomWindow extends Window {
  aptos?: any;
}

export const getAptosWallet = async () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const customWindow = window as CustomWindow;
  const isPetraInstalled = 'aptos' in customWindow;

  if (!isPetraInstalled) {
    window.open('https://petra.app/', '_blank');
    throw new Error('Wallet not found');
  }

  return customWindow.aptos;
};

export const getDataAptosWallet = async () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const customWindow = window as CustomWindow;
  const isPetraInstalled = 'aptos' in customWindow;

  if (!isPetraInstalled) {
    console.log('Petra is not installed');
    return null;
  }

  const wallet: any = await getAptosWallet();
  try {
    const response = await wallet.connect();
    const account = await wallet.account();
    return { response, account };
  } catch (error) {
    throw new Error(error);
  }
};
