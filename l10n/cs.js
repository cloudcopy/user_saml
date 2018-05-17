OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Uloženo",
    "X.509 certificate of the Service Provider" : "X.509 certifikát poskytovatele služby",
    "Private key of the Service Provider" : "Privátní klíč poskytovatele služby",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indikuje že nameID <samlp:logoutRequest> odeslané tímto poskytovatelm služeb bude šifrováno.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indikuje, jestli budou zprávy <samlp:AuthnRequest> odeslané tímto SP podepsané. [Tato informace bude dostupná v metadatech SP]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indikuje, jestli budou zprávy <samlp:logoutRequest> odeslané tímto SP podepsané.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indikuje, jestli budou zprávy <samlp:logoutResponse> odeslané tímto  SP podepsané.",
    "Whether the metadata should be signed." : "Zda mají být metadata podepisována.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indikuje požadavek na podepsání elementů <samlp:Response>, <samlp:LogoutRequest> a <samlp:LogoutResponse> ve zprávách tímto SP.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indikuje požadavek na podepsání elementů <saml:Assertion> přijaté tímto SP. [Tato informace bude dostupná v metadatech SP]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indikuje požadavek na šifrování elementů <saml:Assertion> přijaté tímto SP.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : " Indikuje požadavek na přítomnost elementu NameID v SAMLResponse přijaté tímto SP.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indikuje požadavek poskytovatele služby na přijetí NameID v zašifrované podobě.",
    "Indicates if the SP will validate all received XML." : "Indikuje, zda poskytovatel služeb ověří všechna přijatá XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL kóduje SAML data malými písmeny, a toolkit používá ve výchozím nastavení velká písmena. Povolit pro ADFS kompatibilitu pro ověření podpisu.",
    "Attribute to map the UID to." : "Atribut k přiřazení UID.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Přihlášení povolit pouze pokud účet již existuje i někde jinde. (např. LDAP)",
    "Attribute to map the displayname to." : "Atribut, na který se má mapovat zobrazované jméno.",
    "Attribute to map the email address to." : "Atribut, na který se má mapovat e-mailová adresa.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Použít SAML pro %s desktopové klienty (vyžaduje novou autentizaci uživatele)",
    "SSO & SAML authentication" : "SSO & SAML ověření",
    "Open documentation" : "Otevřít dokumentaci",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Vyberte prosím zda chcete ověřovat za použití dodané zabudované SAML funkce v Nextcloud nebo zda chcete ověřovat za pomoci proměnné prostředí.",
    "Use built-in SAML authentication" : "Použít zabudované SAML ověření",
    "Use environment variable" : "Použít proměnné prostředí",
    "General" : "Obecné",
    "Service Provider Data" : "Poskytovatel datových služeb",
    "If your Service Provider should use certificates you can optionally specify them here." : "Pokud by měl váš poskytovatel služeb používat certifikáty, můžete je zde specifikovat.",
    "Show Service Provider settings…" : "Zobrazit nastavení poskytovatele služeb ...",
    "Identity Provider Data" : "Poskytovatel přihlašovacích dat",
    "Configure your IdP settings here." : "Zde lze konfigurovat nastavení poskytovatele přihlašovacích údajů.",
    "Identifier of the IdP entity (must be a URI)" : "Identifikátor IdP entity (musí být URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Cíl URL IdP, kam SP odešle zprávu s požadavkem na autentizaci",
    "Show optional Identity Provider settings…" : "Zobrazit nepovinná nastavení poskytovatele přihlašovacích údajů ...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Umístění URL IdP, kam SP odešle SLO požadavek",
    "Public X.509 certificate of the IdP" : "Veřejný X.509 certifikát poskytovatele přihlašovacích údajů",
    "Attribute mapping" : "Mapování atributů",
    "If you want to optionally map attributes to the user you can configure these here." : "Pokud chcete volitelně provést mapování atributů uživatele, můžete to zde provést.",
    "Show attribute mapping settings…" : "Zobrazit nastavení mapování atributů ...",
    "Security settings" : "Bezpečnostní nastavení",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Pro zvýšení bezpečnosti doporučujeme povolení následujících možností, pokud jsou tyto podporovány ve vašem prostředí.",
    "Show security settings…" : "Zobrazit nastavení zabezpečení…",
    "Signatures and encryption offered" : "Podpisy a šifrování nabízeno",
    "Signatures and encryption required" : "Podpisy a šifrování vyžadováno",
    "Download metadata XML" : "Stahovat metadata XML",
    "Metadata invalid" : "Metadata neplatná",
    "Metadata valid" : "Metadata jsou platná",
    "Account not provisioned." : "Účet není zprovozněn.",
    "Your account is not provisioned, access to this service is thus not possible." : "Váš účet ještě nebyl zprovozněn, přístup ke službě tedy ještě není možný.",
    "Indicates if the SP will validate all received XMLs." : "Indikuje, zda poskytovatel služby ověří všechna přijatá XML.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Přihlášení povolit pouze pokud účet již existuje i někde jinde. (např. LDAP)",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Ujistěte se, že máte nastavený administrátorský uživatelský účet, který má přístup k instanci přes SSO. Přihlašování s klasickým %s účtem již nebude možné.",
    "Show Service Provider settings ..." : "Zobrazit nastavení poskytovatele služeb ...",
    "Show optional Identity Provider settings ..." : "Zobrazit nepovinná nastavení poskytovatele přihlašovacích údajů ...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Pokud chcete mapovat SAML atributy na uživatele, můžete to nastavit zde.",
    "Show attribute mapping settings ..." : "Zobrazit nastavení mapování atributů ...",
    "Show security settings ..." : "Zobrazit bezpečnostní nastavení ..."
},
"nplurals=4; plural=(n < 10 && n % 1 == 0) ? 1 : (n < 9999 && n >= 10 && n % 1 == 0) ? 3 : (n % 1 != 0) : 4;");
