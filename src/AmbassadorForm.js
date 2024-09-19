// src/AmbassadorForm.js
import React, { useState } from 'react';

const AmbassadorForm = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [chain, setChain] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [customLink, setCustomLink] = useState('');

  const chains = [
    'Ethereum',
    'BSC',
    'Polygon',
    'Avalanche',
    'Arbitrum',
    'Optimism',
    'Fantom',
    'Base',
    'Gnosis'
  ];

  const generateLink = () => {
    const baseUrl = 'https://anyalt.finance/widget';
    const link = `${baseUrl}?contract=${contractAddress}&chain=${chain}&referral=${referralCode}`;
    setCustomLink(link);
  };

  return (
    <div className="form-container" style={{ margin: '50px', fontFamily: 'Arial' }}>
      <h2>Generate Your Custom AnyAlt Link</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Contract Address:</label>
        <input
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder="Enter Contract Address"
          style={{ padding: '8px', width: '100%', marginTop: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Select Chain:</label>
        <select
          value={chain}
          onChange={(e) => setChain(e.target.value)}
          style={{ padding: '8px', width: '100%', marginTop: '10px' }}
        >
          <option value="">Select a chain</option>
          {chains.map((chainOption, index) => (
            <option key={index} value={chainOption}>
              {chainOption}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Referral Code:</label>
        <input
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          placeholder="Enter Referral Code"
          style={{ padding: '8px', width: '100%', marginTop: '10px' }}
        />
      </div>

      <button
        onClick={generateLink}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Generate Link
      </button>

      {customLink && (
        <div style={{ marginTop: '20px' }}>
          <h4>Your Custom Link:</h4>
          <a href={customLink} target="_blank" rel="noopener noreferrer">
            {customLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default AmbassadorForm;
