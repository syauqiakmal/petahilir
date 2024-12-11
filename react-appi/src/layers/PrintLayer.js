import logo from "../Logo/Printer.png";
import { Map } from "../Map/Map"; // Peta pertama
import { Mapi as Map2 } from "../Map/MapCoba_bauksite"; // Peta kedua
import { Mapi as Map3 } from "../Map/MapCoba_Pasir"; // Peta ketiga
import { Map as Map4 } from "../Map/Map_copy_BIT"; // Peta keempat

import React, { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";

export const PrintLayer = ({ activeMap: initialMap }) => {
    const [activeMap, setActiveMap] = useState(initialMap || "map1"); // "map1", "map2", "map3", atau "map4"
    const [hideComponents, setHideComponents] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const mapRef = useRef();

    const setMapRef = useCallback((node) => {
        if (node !== null) {
            mapRef.current = node;
        }
    }, []);

    const handleCapture = () => {
        setHideComponents(true);
        setIsLoading(true);

        setTimeout(() => {
            if (mapRef.current === null) {
                return;
            }

            setIsLoading(false);

            setTimeout(() => {
                toPng(mapRef.current)
                    .then((dataUrl) => {
                        const link = document.createElement("a");
                        link.href = dataUrl;
                        link.download = "map.png";
                        link.click();

                        setHideComponents(false);
                    })
                    .catch((error) => {
                        console.error("Oops, something went wrong!", error);
                        setHideComponents(false);
                    });
            }, 100);
        }, 1000);
    };

    return (
        <div>
            {/* Tombol untuk memilih peta 1-3 */}
            <div style={{ position: "absolute", top: "3%", right: "0%", zIndex: 1002 }}>
                <button
                    onClick={() => setActiveMap("map1")}
                    className={`map-button ${activeMap === "map1" ? "active" : ""}`}
                    style={{
                        marginRight: "620px",
                        padding: "10px",
                        width: "90px",
                        background: activeMap === "map1" ? "#08709d" : "white",
                        color: activeMap === "map1" ? "white" : "black",
                        borderRadius: "50px",
                        cursor: "pointer",
                    }}
                >
                    Nikel
                </button>
                <button
                    onClick={() => setActiveMap("map2")}
                    className={`map-button ${activeMap === "map2" ? "active" : ""}`}
                    style={{
                        marginRight: "780px",
                        padding: "10px",
                        width: "200px",
                        background: activeMap === "map2" ? "#08709d" : "white",
                        color: activeMap === "map2" ? "white" : "black",
                        borderRadius: "50px",
                        cursor: "pointer",
                    }}
                >
                    Pasir Kuarsa
                </button>
                <button
                    onClick={() => setActiveMap("map3")}
                    className={`map-button ${activeMap === "map3" ? "active" : ""}`}
                    style={{
                        marginRight: "1050px",
                        padding: "10px",
                        width: "90px",
                        background: activeMap === "map3" ? "#08709d" : "white",
                        color: activeMap === "map3" ? "white" : "black",
                        borderRadius: "50px",
                        cursor: "pointer",
                    }}
                >
                    Bauksit
                </button>
            </div>

            {/* Tombol untuk memilih peta ke-4 */}
            <div style={{ position: "absolute", top: "90%", left: "60%", zIndex: 1002 }}>
                <button
                    onClick={() => setActiveMap("map4")}
                    className={`map-button ${activeMap === "map4" ? "active" : ""}`}
                    style={{
                        padding: "10px",
                        width: "350px",
                        background: activeMap === "map4" ? "#08709d" : "white",
                        color: activeMap === "map4" ? "white" : "black",
                        borderRadius: "50px",
                        cursor: "pointer",
                    }}
                >
                    Bilateral Investment Treaties (BITs)
                </button>
            </div>

            {/* Tombol untuk mencetak */}
            <button
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "28px",
                    border: "3px solid white",
                    background: "rgba(255, 255, 255)",
                    padding: "20px",
                    borderRadius: "100px",
                    zIndex: 1000,
                    backgroundImage: `url(${logo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "30px",
                    backgroundPosition: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-out",
                }}
                onClick={handleCapture}
                onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                }}
            ></button>

            <div ref={setMapRef} style={{ position: "relative" }}>
                {/* Render peta berdasarkan state */}
                {activeMap === "map1" && <Map hideComponents={hideComponents} />}
                {activeMap === "map2" && <Map2 hideComponents={hideComponents} />}
                {activeMap === "map3" && <Map3 hideComponents={hideComponents} />}
                {activeMap === "map4" && <Map4 hideComponents={hideComponents} />}

                {isLoading && (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "rgba(255, 255, 255, 0.8)",
                            padding: "20px",
                            borderRadius: "8px",
                            zIndex: 1000,
                        }}
                    >
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );
};
