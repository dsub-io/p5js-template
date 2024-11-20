# P5 JS Template

## How to install?

### Windows Installation

Install Node on your system.

- Use Node Version Manager (NVM) or directly install Node Server on Windows / MacOS or Linux Box.
- Go to https://github.com/coreybutler/nvm-windows/releases and download then install the exe file.
- Open powershell, and run the following command
   ```powershell
      nvm install lts
      nvm use lts
   ```
- Run the following command to install PNPM.
    ```powershell
        Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
    ```
- Re open the webstorm. Then open the terminal below, and run the following command.
    ```powershell
        pnpm i
    ```
  
All done. Now you can run the server:
```powershell
    pnpm dev
```

to close the server, press `Ctrl + C` in the terminal.