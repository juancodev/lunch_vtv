import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "33.33%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  total: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'right',
  }
});

const ReportPDF = ({ data }) => {
  // Calcular el total de desayunos, almuerzos y cenas
  const total = data.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>Reporte de Comidas por Departamento</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Tipo de Horarios</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Departamento</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Cantidad</Text>
            </View>
          </View>
          {data.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.tipo}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.departamento}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.cantidad}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.total}>Total: {total}</Text>
      </Page>
    </Document>
  );
};

export default ReportPDF;