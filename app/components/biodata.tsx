'use client'; // Tambahkan ini di baris pertama

import React, { useState } from 'react';

const PersonalInfo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const personalData = {
    name: 'Rendy Maulana Yusuf Pamungkas',
    birthDate: '26 April 2004',
    email: 'rendy.yusuf04@gmail.com',
    phone: '087785431315',
    address: 'Jl. Sindang Taman RT.04/07, Desa Cipanas, Kec. Tanjung Kerta, Kabupaten Sumedang, Provinsi Jawa Barat, Indonesia',
    occupation: 'Programming',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
    container: {
      border: '1px solid  #0004ff',
      borderRadius: '5px',
      padding: '20px',
      maxWidth: '900px',
      margin: '20px auto',
      backgroundColor: '#black',
      fontFamily: 'Roboto, sans-serif', // Ganti font di sini
    },
    title: {
      color: 'red',
      fontFamily: 'Roboto, sans-serif', // Ganti font judul di sini
      fontWeight: '700', // Menggunakan berat font yang lebih tebal
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
      color: 'white',
    },
  };

export default PersonalInfo;