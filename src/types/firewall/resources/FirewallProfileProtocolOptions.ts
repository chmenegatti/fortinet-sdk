// AUTO-GENERATED FROM FortiOS.7.4.10-Configuration-API-firewall.json
// DO NOT EDIT MANUALLY

export interface FirewallProfileProtocolOptions {
  name?: string;
  comment?: string;
  replacemsgGroup?: string;
  oversizeLog?: "disable" | "enable";
  switchingProtocolsLog?: "disable" | "enable";
  http?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      inspectAll?: "enable" | "disable";
      proxyAfterTcpHandshake?: "enable" | "disable";
      options?: "clientcomfort" | "servercomfort" | "oversize" | "chunkedbypass";
      comfortInterval?: number;
      comfortAmount?: number;
      rangeBlock?: "disable" | "enable";
      stripXForwardedFor?: "disable" | "enable";
      postLang?: "jisx0201" | "jisx0208" | "jisx0212" | "gb2312" | "ksc5601-ex" | "euc-jp" | "sjis" | "iso2022-jp" | "iso2022-jp-1" | "iso2022-jp-2" | "euc-cn" | "ces-gbk" | "hz" | "ces-big5" | "euc-kr" | "iso2022-jp-3" | "iso8859-1" | "tis620" | "cp874" | "cp1252" | "cp1251";
      streamingContentBypass?: "enable" | "disable";
      switchingProtocols?: "bypass" | "block";
      unknownHttpVersion?: "reject" | "tunnel" | "best-effort";
      tunnelNonHttp?: "enable" | "disable";
      h2c?: "enable" | "disable";
      unknownContentEncoding?: "block" | "inspect" | "bypass";
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      streamBasedUncompressedLimit?: number;
      scanBzip2?: "enable" | "disable";
      verifyDnsForPolicyMatching?: "enable" | "disable";
      blockPageStatusCode?: number;
      retryCount?: number;
      tcpWindowType?: "auto-tuning" | "system" | "static" | "dynamic";
      tcpWindowMinimum?: number;
      tcpWindowMaximum?: number;
      tcpWindowSize?: number;
      sslOffloaded?: "no" | "yes";
      addressIpRating?: "enable" | "disable";
    }>;
  ftp?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      inspectAll?: "enable" | "disable";
      options?: "clientcomfort" | "oversize" | "splice" | "bypass-rest-command" | "bypass-mode-command";
      comfortInterval?: number;
      comfortAmount?: number;
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      streamBasedUncompressedLimit?: number;
      scanBzip2?: "enable" | "disable";
      tcpWindowType?: "auto-tuning" | "system" | "static" | "dynamic";
      tcpWindowMinimum?: number;
      tcpWindowMaximum?: number;
      tcpWindowSize?: number;
      sslOffloaded?: "no" | "yes";
      explicitFtpTls?: "enable" | "disable";
    }>;
  imap?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      inspectAll?: "enable" | "disable";
      proxyAfterTcpHandshake?: "enable" | "disable";
      options?: "fragmail" | "oversize";
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      scanBzip2?: "enable" | "disable";
      sslOffloaded?: "no" | "yes";
    }>;
  mapi?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      options?: "fragmail" | "oversize";
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      scanBzip2?: "enable" | "disable";
    }>;
  pop3?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      inspectAll?: "enable" | "disable";
      proxyAfterTcpHandshake?: "enable" | "disable";
      options?: "fragmail" | "oversize";
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      scanBzip2?: "enable" | "disable";
      sslOffloaded?: "no" | "yes";
    }>;
  smtp?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      inspectAll?: "enable" | "disable";
      proxyAfterTcpHandshake?: "enable" | "disable";
      options?: "fragmail" | "oversize" | "splice";
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      scanBzip2?: "enable" | "disable";
      serverBusy?: "enable" | "disable";
      sslOffloaded?: "no" | "yes";
    }>;
  nntp?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      inspectAll?: "enable" | "disable";
      proxyAfterTcpHandshake?: "enable" | "disable";
      options?: "oversize" | "splice";
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      scanBzip2?: "enable" | "disable";
    }>;
  ssh?: Array<{
      options?: "oversize" | "clientcomfort" | "servercomfort";
      comfortInterval?: number;
      comfortAmount?: number;
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      streamBasedUncompressedLimit?: number;
      scanBzip2?: "enable" | "disable";
      tcpWindowType?: "auto-tuning" | "system" | "static" | "dynamic";
      tcpWindowMinimum?: number;
      tcpWindowMaximum?: number;
      tcpWindowSize?: number;
      sslOffloaded?: "no" | "yes";
    }>;
  dns?: Array<{
      ports?: number;
      status?: "enable" | "disable";
    }>;
  cifs?: Array<{
      ports?: number;
      status?: "enable" | "disable";
      options?: "oversize";
      oversizeLimit?: number;
      uncompressedOversizeLimit?: number;
      uncompressedNestLimit?: number;
      scanBzip2?: "enable" | "disable";
      tcpWindowType?: "auto-tuning" | "system" | "static" | "dynamic";
      tcpWindowMinimum?: number;
      tcpWindowMaximum?: number;
      tcpWindowSize?: number;
      serverCredentialType?: "none" | "credential-replication" | "credential-keytab";
      domainController?: string;
      serverKeytab?: Array<{
          principal?: string;
          keytab?: string;
        }>;
    }>;
  mailSignature?: Array<{
      status?: "disable" | "enable";
      signature?: string;
    }>;
  rpcOverHttp?: "enable" | "disable";
}
