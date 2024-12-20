import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { prices, tableRows } from "../../../helpers/constants";
import { AllPricesType, TotalPriceType, ValuesType } from "../../../interfaces/interfaces";

Font.register({
    family: "Poppins",
    src: "/font/Poppins-Regular.ttf",
});

// Define styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: "Poppins",
    },

    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        flexWrap: "wrap",
    },
    box: {
        padding: 5,
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        flexGrow: 1,
        margin: 2,
        display: "flex",

        gap: 5,
    },
    label: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#a67c52",
    },
    value: {
        fontSize: 10,
        color: "#333",
    },

    header: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
    },

    footer: {
        marginTop: 10,
        fontSize: 10,
        color: "gray",
        fontWeight: "bold",
    },

    table: {
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        marginBottom: 10,
    },
    tableRowHeader: { flexDirection: "row", borderBottomWidth: 1, borderStyle: "solid" },
    tableCellHeader: {
        backgroundColor: "#c5a484",
        borderWidth: 0,
        borderRightWidth: 1,
        padding: 5,
        fontWeight: "bold",
    },
    tableRow: {
        flexDirection: "row",
        borderStyle: "solid",
        borderBottomWidth: 1,
    },

    tableCell: {
        margin: 0,
        padding: 5,
        fontSize: 10,
        borderWidth: 0,
        borderRightWidth: 1,
        textAlign: "right",
    },

    totalCell: {
        backgroundColor: "#c5a484",
        flex: 7,
        fontWeight: "bold",
        padding: 5,
    },
});

const StatementPDF = ({ total, values }: { total: TotalPriceType; values: ValuesType }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>{"Obračun"}</Text>

                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.label}>Stub:</Text>
                        <Text style={styles.value}>
                            {prices[values.pillars as keyof AllPricesType].element}
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.label}>Deking / ispuna:</Text>
                        <Text style={styles.value}>
                            {prices[values.wall as keyof AllPricesType].element}
                        </Text>
                    </View>
                    <View style={[styles.box, { flexDirection: "row" }]}>
                        <Text style={styles.label}>Broj polja:</Text>
                        <Text style={styles.value}>{`${
                            (total?.[values.pillars]?.amount ?? 1) - 1
                        }`}</Text>
                    </View>
                    <View style={[styles.box, { flexDirection: "row" }]}>
                        <Text style={styles.label}>Visina:</Text>
                        <Text style={styles.value}>{`${values.height} cm`}</Text>
                    </View>
                    <View style={[styles.box, { flexDirection: "row" }]}>
                        <Text style={styles.label}>Dužina:</Text>
                        <Text style={styles.value}>{`${values.length} m`}</Text>
                    </View>
                </View>

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        {tableRows.map((row, i) => (
                            <Text
                                style={[
                                    styles.tableCellHeader,
                                    {
                                        flex: i === 0 ? 4 : 1,
                                        borderRightWidth: i === tableRows.length - 1 ? 0 : 1,
                                        textAlign: i === 0 ? "left" : "right",
                                    },
                                ]}
                                key={row.label}
                            >
                                {row.label}
                            </Text>
                        ))}
                    </View>

                    {total &&
                        Object.keys(total).map((key) => (
                            <View style={styles.tableRow} key={key}>
                                <Text style={[styles.tableCell, { flex: 4, textAlign: "left" }]}>
                                    {prices[key as keyof typeof prices].element}
                                </Text>

                                <Text style={[styles.tableCell, { flex: 1 }]}>
                                    {total[key as keyof typeof total]?.amount}
                                </Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>
                                    {prices[key as keyof typeof prices].unit}
                                </Text>
                                <Text style={[styles.tableCell, { flex: 1 }]}>
                                    {prices[key as keyof typeof prices].price}
                                </Text>
                                <Text style={[styles.tableCell, { flex: 1, borderRightWidth: 0 }]}>
                                    {total[key as keyof typeof total]?.totalPrice}
                                </Text>
                            </View>
                        ))}

                    <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
                        <Text style={[styles.totalCell]}>Ukupno</Text>
                        <Text style={[styles.totalCell, { flex: 1, textAlign: "right" }]}>
                            {total &&
                                Math.round(
                                    Object.values(total).reduce(
                                        (acc, curr) => acc + curr.totalPrice,
                                        0
                                    ) * 100
                                ) / 100}
                            €
                        </Text>
                    </View>
                </View>

                <Text style={styles.footer}>
                    Napomena: Prikazana cena je bez uračunatog PDV-a i bez uračunatih transportnih i
                    terenskih troškova.
                </Text>
            </Page>
        </Document>
    );
};

export default StatementPDF;
