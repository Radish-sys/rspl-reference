// data.js — AMMO_DATA and WEAPON_DAMAGE for RSPL2 reference site
// Also: AMMO_CATEGORY_OF/AMMO_LEGACY/AMMO_CONFLICTS (feed the Ammo page) and
// PLAYER_STATS/HITZONE_DATA/DAMAGE_TYPES (feed the Damage page) — added so
// both pages render from real data objects the admin editor can review and
// correct, instead of a hand-typed static table that can silently drift.

const AMMO_DATA = {"3006": {"name": ".30-06 Springfield", "dmg_close": 150.0, "dmg_long": 30.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 4}, "762x51": {"name": "7.62x51mm NATO", "dmg_close": 130.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "762x51_Nato": {"name": "7.62x51mm NATO", "dmg_close": 130.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "762x51_Tracer": {"name": "7.62x51mm NATO", "dmg_close": 130.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "762x51_Nato_Tracer": {"name": "7.62x51mm NATO", "dmg_close": 130.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "762x54R": {"name": "7.62x54mmR", "dmg_close": 150.0, "dmg_long": 30.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 4}, "762x54R_Tracer": {"name": "7.62x54mmR", "dmg_close": 150.0, "dmg_long": 30.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 4}, "762x39": {"name": "7.62x39mm", "dmg_close": 100.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "556x45_Nato": {"name": "5.56x45mm NATO", "dmg_close": 75.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "556x45_Nato_Tracer": {"name": "5.56x45mm NATO", "dmg_close": 75.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "545x39": {"name": "5.45x39mm", "dmg_close": 70.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "58x42": {"name": "5.8x42mm", "dmg_close": 75.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "9x39_SP5": {"name": "9x39mm", "dmg_close": 150.0, "dmg_long": 10.0, "pen": 5.5, "supp": 0.3, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "9x19": {"name": "9x19mm", "dmg_close": 70.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "9x18": {"name": "9x18mm", "dmg_close": 70.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "45acp": {"name": ".45 ACP", "dmg_close": 140.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "46x30": {"name": "4.6x30mm", "dmg_close": 50.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "57x28": {"name": "5.7x28mm", "dmg_close": 50.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "300Blk": {"name": "300 Blackout", "dmg_close": 75.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 2, "stk_long": 10}, "338LM": {"name": ".338 LM", "dmg_close": 150.0, "dmg_long": 30.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 4}, "338LM_AP": {"name": ".338 LM", "dmg_close": 150.0, "dmg_long": 30.0, "pen": 1.0, "supp": 0.35, "maxpen": 5, "stk_close": 1, "stk_long": 4}, "50ae": {"name": ".50 Action Express", "dmg_close": 140.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "50BMG_AM": {"name": ".50 BMG", "dmg_close": 500.0, "dmg_long": 50.0, "pen": 1.0, "supp": 0.5, "maxpen": 4, "stk_close": 1, "stk_long": 2}, "127x108_AM": {"name": "12.7x108", "dmg_close": 500.0, "dmg_long": 50.0, "pen": 1.0, "supp": 0.5, "maxpen": 3, "stk_close": 1, "stk_long": 2}, "12GA": {"name": "12 Gauge", "dmg_close": 80.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 1, "stk_long": 2, "pellets": 8}, "357": {"name": ".357 Magnum", "dmg_close": 140.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "stk_close": 1, "stk_long": 10}, "4GA": {"name": "4 Gauge", "dmg_close": 80.0, "dmg_long": 10.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 16, "stk_close": 1, "stk_long": 1}};

// Real velocity/damage/penetration curves per ammo type, extracted directly from each
// Ammo_* CDO's DamageCurve / VelocityDecelerationCurve / PenetrationPowerCurve via the
// SDK's Python console (AssetExportTask T3D dump). "Time" on all three curves is the
// bullet's current retained velocity in cm/s, not distance — VelocityDecelerationCurve
// gives the deceleration rate (cm/s^2) at that velocity, meant to be integrated over time
// starting from a weapon's muzzle velocity (WEAPON_DAMAGE[...].mv) to get real damage/pen
// vs. distance. Verified: damage_at(mv) reproduces WEAPON_DAMAGE's listed "dmg" for all
// 81 tracked weapons within 0.05 (rounding only). See wdmSimulateCurve() in index.html.
const AMMO_CURVES = {
  "127x108_AM": {"dmg": [[5000,50],[100000,500]], "vel": [[5000,0],[100000,100000]], "pen": [[5000,100],[100000,800]]},
  "12GA":       {"dmg": [[5000,10],[50000,80]],   "vel": [[5000,0],[50000,200000]],  "pen": [[5000,20],[50000,200]]},
  "4GA":        {"dmg": [[5000,10],[50000,80]],   "vel": [[5000,0],[50000,200000]],  "pen": [[5000,20],[50000,200]]},
  "3006":       {"dmg": [[5000,30],[100000,150]], "vel": [[5000,0],[100000,150000]], "pen": [[5000,50],[100000,500]]},
  "300Blk":     {"dmg": [[5000,10],[30000,75]],   "vel": [[5000,0],[30000,10000]],   "pen": [[5000,30],[30000,700]]},
  "338LM":      {"dmg": [[5000,30],[100000,150]], "vel": [[5000,0],[100000,150000]], "pen": [[5000,100],[100000,700]]},
  "357":        {"dmg": [[5000,10],[40000,140]],  "vel": [[5000,0],[40000,120000]],  "pen": [[5000,40],[40000,400]]},
  "45acp":      {"dmg": [[5000,10],[40000,140]],  "vel": [[5000,0],[40000,120000]],  "pen": [[5000,40],[40000,400]]},
  "46x30":      {"dmg": [[5000,10],[90000,50]],   "vel": [[5000,0],[90000,200000]],  "pen": [[5000,30],[90000,300]]},
  "50BMG_AM":   {"dmg": [[5000,50],[100000,500]], "vel": [[5000,0],[100000,100000]], "pen": [[5000,100],[100000,800]]},
  "50ae":       {"dmg": [[5000,10],[40000,140]],  "vel": [[5000,0],[40000,120000]],  "pen": [[5000,40],[40000,400]]},
  "545x39":     {"dmg": [[5000,10],[100000,70]],  "vel": [[5000,0],[100000,150000]], "pen": [[5000,30],[100000,350]]},
  "556x45_Nato":{"dmg": [[5000,10],[100000,75]],  "vel": [[5000,0],[100000,150000]], "pen": [[5000,30],[100000,350]]},
  "57x28":      {"dmg": [[5000,10],[90000,50]],   "vel": [[5000,0],[90000,200000]],  "pen": [[5000,30],[90000,300]]},
  "58x42":      {"dmg": [[5000,10],[100000,75]],  "vel": [[5000,0],[100000,150000]], "pen": [[5000,30],[100000,350]]},
  "762x39":     {"dmg": [[5000,10],[100000,100]], "vel": [[5000,0],[100000,150000]], "pen": [[5000,50],[100000,500]]},
  "762x51":     {"dmg": [[5000,10],[100000,130]], "vel": [[5000,0],[100000,150000]], "pen": [[5000,50],[100000,500]]},
  "762x51_Nato":{"dmg": [[5000,10],[100000,130]], "vel": [[5000,0],[100000,150000]], "pen": [[5000,50],[100000,500]]},
  "762x51_Tracer":{"dmg":[[5000,10],[100000,130]],"vel": [[5000,0],[100000,150000]], "pen": [[5000,50],[100000,500]]},
  "762x54R":    {"dmg": [[5000,30],[100000,150]], "vel": [[5000,0],[100000,150000]], "pen": [[5000,100],[100000,500]]},
  "9x18":       {"dmg": [[5000,10],[45000,70]],   "vel": [[5000,0],[45000,70000]],   "pen": [[5000,20],[45000,200]]},
  "9x19":       {"dmg": [[5000,10],[45000,70]],   "vel": [[5000,0],[45000,70000]],   "pen": [[5000,20],[45000,200]]},
  "9x39_SP5":   {"dmg": [[5000,10],[100000,150]], "vel": [[5000,0],[100000,15000]],  "pen": [[5000,30],[100000,350]]}
};

const WEAPON_DAMAGE = {"BP_Firearm_M1Garand": {"dmg": 131.4, "stk": 1, "ammo": "3006", "mv": 853.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_ACE52": {"dmg": 104.7, "stk": 1, "ammo": "762x51", "mv": 800.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_AK74": {"dmg": 63.7, "stk": 2, "ammo": "545x39", "mv": 900.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_AKAlpha": {"dmg": 68.7, "stk": 2, "ammo": "762x39", "mv": 670.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_AKM": {"dmg": 73.0, "stk": 2, "ammo": "762x39", "mv": 715.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_AKS74u": {"dmg": 53.3, "stk": 2, "ammo": "545x39", "mv": 735.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_ASVAL": {"dmg": 46.1, "stk": 3, "ammo": "9x39_SP5", "mv": 295.0, "pen": 5.5, "supp": 0.3, "maxpen": 5}, "BP_Firearm_AUG": {"dmg": 72.9, "stk": 2, "ammo": "556x45_Nato", "mv": 970.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_BerettaAR7090": {"dmg": 69.5, "stk": 2, "ammo": "556x45_Nato", "mv": 920.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_BrowningHP": {"dmg": 55.0, "stk": 2, "ammo": "9x19", "mv": 350.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_DesertEagle": {"dmg": 140.0, "stk": 1, "ammo": "50ae", "mv": 470.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Enfield": {"dmg": 103.5, "stk": 1, "ammo": "762x51", "mv": 790.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_F2000": {"dmg": 68.2, "stk": 2, "ammo": "556x45_Nato", "mv": 900.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_F2000Tactical": {"dmg": 68.2, "stk": 2, "ammo": "556x45_Nato", "mv": 900.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Fal": {"dmg": 106.0, "stk": 1, "ammo": "762x51", "mv": 810.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_Famas": {"dmg": 70.2, "stk": 2, "ammo": "556x45_Nato", "mv": 930.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_G3": {"dmg": 104.7, "stk": 1, "ammo": "762x51", "mv": 800.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_G36K": {"dmg": 64.7, "stk": 2, "ammo": "556x45_Nato", "mv": 850.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Galil": {"dmg": 71.6, "stk": 2, "ammo": "556x45_Nato", "mv": 950.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_GalilSAR": {"dmg": 68.2, "stk": 2, "ammo": "556x45_Nato", "mv": 900.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_HBadger": {"dmg": 64.3, "stk": 2, "ammo": "300Blk", "mv": 259.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_H21": {"dmg": 109.8, "stk": 1, "ammo": "762x51_Tracer", "mv": 840.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_KS23": {"dmg": 66.8, "stk": 1, "ammo": "4GA", "mv": 415.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 16}, "BP_Firearm_KSG": {"dmg": 68.3, "stk": 1, "ammo": "12GA", "mv": 425.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_L105": {"dmg": 70.0, "stk": 2, "ammo": "9x19", "mv": 450.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_L1a1": {"dmg": 121.2, "stk": 1, "ammo": "762x51", "mv": 930.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_L85A2": {"dmg": 70.9, "stk": 2, "ammo": "556x45_Nato", "mv": 940.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_L96A1": {"dmg": 133.5, "stk": 1, "ammo": "338LM", "mv": 869.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_M110": {"dmg": 111.1, "stk": 1, "ammo": "762x51_Nato", "mv": 850.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_M16A2": {"dmg": 72.3, "stk": 2, "ammo": "556x45_Nato", "mv": 960.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_M16A4": {"dmg": 72.3, "stk": 2, "ammo": "556x45_Nato", "mv": 960.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_M1911": {"dmg": 85.4, "stk": 2, "ammo": "45acp", "mv": 253.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_M24": {"dmg": 103.5, "stk": 1, "ammo": "762x51", "mv": 790.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_M240": {"dmg": 111.4, "stk": 1, "ammo": "762x51_Nato", "mv": 853.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_M249": {"dmg": 69.2, "stk": 2, "ammo": "556x45_Nato", "mv": 915.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_M26MK": {"dmg": 48.9, "stk": 1, "ammo": "12GA", "mv": 300.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_M26MK_AUG": {"dmg": 48.9, "stk": 1, "ammo": "12GA", "mv": 300.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_M26MK_M16": {"dmg": 48.9, "stk": 1, "ammo": "12GA", "mv": 300.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_M45": {"dmg": 85.4, "stk": 2, "ammo": "45acp", "mv": 253.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_M4A1": {"dmg": 68.8, "stk": 2, "ammo": "556x45_Nato", "mv": 910.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_M60": {"dmg": 111.4, "stk": 1, "ammo": "762x51_Nato", "mv": 853.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_M82": {"dmg": 430.4, "stk": 1, "ammo": "50BMG_AM", "mv": 853.0, "pen": 1.0, "supp": 0.5, "maxpen": 4}, "BP_Firearm_M870": {"dmg": 64.4, "stk": 1, "ammo": "12GA", "mv": 400.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_M99": {"dmg": 405.3, "stk": 1, "ammo": "127x108_AM", "mv": 800.0, "pen": 1.0, "supp": 0.5, "maxpen": 3}, "BP_Firearm_M9": {"dmg": 59.6, "stk": 2, "ammo": "9x19", "mv": 381.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_MDR": {"dmg": 111.4, "stk": 1, "ammo": "762x51", "mv": 853.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_MG3": {"dmg": 107.3, "stk": 1, "ammo": "762x51_Tracer", "mv": 820.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_MK14": {"dmg": 111.1, "stk": 1, "ammo": "762x51_Nato", "mv": 850.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_MK17": {"dmg": 94.0, "stk": 2, "ammo": "762x51_Nato", "mv": 715.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_MK18": {"dmg": 59.9, "stk": 2, "ammo": "556x45_Nato", "mv": 780.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_MP5A2": {"dmg": 62.5, "stk": 2, "ammo": "9x19", "mv": 400.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_MP5A5": {"dmg": 62.5, "stk": 2, "ammo": "9x19", "mv": 400.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_MP5k": {"dmg": 58.8, "stk": 2, "ammo": "9x19", "mv": 375.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_MP7": {"dmg": 42.2, "stk": 3, "ammo": "46x30", "mv": 735.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_MR73": {"dmg": 140.0, "stk": 1, "ammo": "357", "mv": 460.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Makarov": {"dmg": 49.8, "stk": 3, "ammo": "9x18", "mv": 315.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Mosin": {"dmg": 132.9, "stk": 1, "ammo": "762x54R", "mv": 865.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_P90": {"dmg": 41.3, "stk": 3, "ammo": "57x28", "mv": 715.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_PF940": {"dmg": 70.0, "stk": 2, "ammo": "9x19", "mv": 450.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_PKM": {"dmg": 127.9, "stk": 1, "ammo": "762x54R", "mv": 825.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_QBZ03": {"dmg": 64.7, "stk": 2, "ammo": "556x45_Nato", "mv": 850.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_QBZ95": {"dmg": 70.2, "stk": 2, "ammo": "58x42", "mv": 930.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_QTS11": {"dmg": 70.2, "stk": 2, "ammo": "58x42", "mv": 930.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_RPK": {"dmg": 75.8, "stk": 2, "ammo": "762x39", "mv": 745.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_SG552": {"dmg": 56.2, "stk": 2, "ammo": "556x45_Nato", "mv": 725.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_SKS": {"dmg": 74.9, "stk": 2, "ammo": "762x39", "mv": 735.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_SVD": {"dmg": 128.5, "stk": 1, "ammo": "762x54R", "mv": 830.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_Saiga12": {"dmg": 64.4, "stk": 1, "ammo": "12GA", "mv": 400.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_Sterling": {"dmg": 59.6, "stk": 2, "ammo": "9x19", "mv": 381.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_TAC338": {"dmg": 133.5, "stk": 1, "ammo": "338LM", "mv": 869.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_TOZ": {"dmg": 64.4, "stk": 1, "ammo": "12GA", "mv": 400.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_Tariq": {"dmg": 56.5, "stk": 2, "ammo": "9x19", "mv": 360.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Tavor": {"dmg": 104.7, "stk": 1, "ammo": "762x51", "mv": 800.0, "pen": 1.0, "supp": 0.35, "maxpen": 5}, "BP_Firearm_USAS12": {"dmg": 64.4, "stk": 1, "ammo": "12GA", "mv": 400.0, "pen": 1.0, "supp": 0.3, "maxpen": 5, "pellets": 8}, "BP_Firearm_UZI": {"dmg": 62.5, "stk": 2, "ammo": "9x19", "mv": 400.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_VHS": {"dmg": 64.7, "stk": 2, "ammo": "556x45_Nato", "mv": 850.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Vector": {"dmg": 95.4, "stk": 2, "ammo": "45acp", "mv": 280.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_WCXSPEARTL": {"dmg": 69.1, "stk": 2, "ammo": "556x45_Nato", "mv": 914.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_Welrod": {"dmg": 44.5, "stk": 3, "ammo": "9x19", "mv": 280.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_GreaseGun": {"dmg": 95.4, "stk": 2, "ammo": "45acp", "mv": 280.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}, "BP_Firearm_STG44": {"dmg": 64.7, "stk": 2, "ammo": "556x45_Nato", "mv": 850.0, "pen": 1.0, "supp": 0.3, "maxpen": 5}};

// ── Ammo page: category grouping ──────────────────────────────────────────
const AMMO_CATEGORIES = ['Battle Rifle / Sniper','Rifle','Pistol / SMG','Subsonic','Shotgun','HMG / Anti-Material','Machine Gun / Tracer'];

const AMMO_CATEGORY_OF = {
  '3006':'Battle Rifle / Sniper','338LM':'Battle Rifle / Sniper','338LM_AP':'Battle Rifle / Sniper',
  '762x51':'Battle Rifle / Sniper','762x51_Nato':'Battle Rifle / Sniper','762x54R':'Battle Rifle / Sniper',
  '762x51_AP':'Battle Rifle / Sniper','762x51_Nato_AP':'Battle Rifle / Sniper','762x54R_AP':'Battle Rifle / Sniper',
  '300Blk':'Rifle','545x39':'Rifle','545x39_AP':'Rifle','556x45_Nato':'Rifle','556x45_Nato_AP':'Rifle',
  '58x42':'Rifle','762x39':'Rifle','762x39_AP':'Rifle',
  '357':'Pistol / SMG','357_AP':'Pistol / SMG','45acp':'Pistol / SMG','45acp_AP':'Pistol / SMG',
  '46x30':'Pistol / SMG','46x30_AP':'Pistol / SMG','57x28':'Pistol / SMG',
  '9x18':'Pistol / SMG','9x18_AP':'Pistol / SMG','9x19':'Pistol / SMG','9x19_AP':'Pistol / SMG',
  '9x39_SP5':'Subsonic',
  '12GA':'Shotgun','12GA_Flechette':'Shotgun','12GA_Slug':'Shotgun','4GA':'Shotgun',
  '127x108_AM':'HMG / Anti-Material','50BMG_AM':'HMG / Anti-Material','50ae':'HMG / Anti-Material',
  '762x51_Tracer':'Machine Gun / Tracer','762x51_Nato_Tracer':'Machine Gun / Tracer',
  '556x45_Nato_Tracer':'Machine Gun / Tracer','762x54R_Tracer':'Machine Gun / Tracer',
};

// Keys that appeared on the old hand-written Ammo page but have no entry in
// AMMO_DATA above (the object the rest of the tool — tooltips, weapon modal —
// actually reads from). Most look like AP-ammo variants that were typed into
// the page once and never given real backing numbers. Kept here, flagged, so
// the admin editor surfaces every one for a decision (confirm the number,
// correct it, or discard the row) instead of silently dropping or trusting it.
const AMMO_LEGACY = {
  '762x51_AP':      {name:'7.62x51mm NATO', pen:1.5, supp:0.35, maxpen:5},
  '762x51_Nato_AP': {name:'7.62x51mm NATO', pen:1.5, supp:0.35, maxpen:5},
  '762x54R_AP':     {name:'7.62x54mmR',     pen:1.5, supp:0.35, maxpen:5},
  '545x39_AP':      {name:'5.45x39mm',      pen:1.5, supp:0.3,  maxpen:5},
  '556x45_Nato_AP': {name:'5.56x45mm NATO', pen:1.5, supp:0.3,  maxpen:5},
  '762x39_AP':      {name:'7.62x39mm',      pen:1.5, supp:0.35, maxpen:5},
  '357_AP':         {name:'.357 Magnum',    pen:1.5, supp:0.3,  maxpen:5},
  '45acp_AP':       {name:'.45 ACP',        pen:1.5, supp:0.3,  maxpen:5},
  '46x30_AP':       {name:'4.6x30mm',       pen:1.5, supp:0.3,  maxpen:5},
  '9x18_AP':        {name:'9x18mm',         pen:1.3, supp:0.3,  maxpen:5},
  '9x19_AP':        {name:'9x19mm',         pen:5.0, supp:0.3,  maxpen:5, note:'Unusually high pen modifier (5.0)'},
  '12GA_Flechette': {name:'Flechettes',     pen:2.0, supp:0.3,  maxpen:5, pellets:8, note:'2x pen vs standard 12GA'},
  '12GA_Slug':      {name:'Slugs',          pen:1.0, supp:0.3,  maxpen:5, note:'Single projectile, 0.1 spread'},
};

// A key that exists in BOTH the old static table and AMMO_DATA, but the two
// disagree — surfaced so the conflict gets resolved rather than silently
// trusting whichever one happens to render.
const AMMO_CONFLICTS = {
  '338LM_AP': {field:'pen', old:1.15, current:1.0, note:'Old Ammo page had pen 1.15; AMMO_DATA (used by weapon tooltips) has pen 1.0.'},
};

// ── Damage page data ───────────────────────────────────────────────────────
const PLAYER_STATS = [
  {key:'max_health', label:'Max Health', value:100, note:'All damage is relative to this'},
  {key:'max_stamina', label:'Max Stamina', value:100, note:''},
  {key:'sprint_stamina_drain', label:'Sprint Stamina Drain/s', value:2.8, note:''},
  {key:'jump_stamina_cost', label:'Jump Stamina Cost', value:5.0, note:''},
  {key:'slide_stamina_cost', label:'Slide Stamina Cost', value:20.0, note:''},
  {key:'suppression_decay', label:'Suppression Decay Rate/s', value:0.16, note:'How fast suppression wears off'},
  {key:'headshot_scale', label:'Headshot Damage Scale', value:5.0, note:'Headshot = 5x damage'},
  {key:'crouch_explosive', label:'Crouch vs Explosives', value:0.85, note:'0.85 = 15% less explosive damage'},
  {key:'prone_explosive', label:'Prone vs Explosives', value:0.6, note:'0.60 = 40% less explosive damage'},
  {key:'safe_fall_speed', label:'Safe Fall Speed (UU/s)', value:1150.0, note:'No damage below this'},
  {key:'fatal_fall_speed', label:'Fatal Fall Speed (UU/s)', value:1400.0, note:'Instant death above this'},
  {key:'death_fade', label:'Death Fade Time (s)', value:2.0, note:''},
  {key:'death_fade_hs', label:'Death Fade Time Headshot (s)', value:0.4, note:'Faster screen fade on headshot kill'},
];

const HITZONE_DATA = [
  {key:'head', zone:'Head', dmg:5.0, vel:0.75, note:'Instakill with any weapon doing 20+ base damage', color:'red'},
  {key:'neck', zone:'Neck', dmg:2.5, vel:0.75, note:'', color:'orange'},
  {key:'shoulder', zone:'Shoulder', dmg:1.0, vel:0.75, note:'', color:'hi'},
  {key:'chest', zone:'Chest / Torso', dmg:1.0, vel:0.75, note:'Default — no explicit override', color:'hi'},
  {key:'upperarm', zone:'Upper Arm', dmg:0.8, vel:0.75, note:'', color:'hi'},
  {key:'forearm', zone:'Forearm', dmg:0.7, vel:0.75, note:'', color:'hi'},
  {key:'hand', zone:'Hand', dmg:0.5, vel:0.75, note:'', color:'green'},
  {key:'thigh', zone:'Thigh', dmg:0.8, vel:0.75, note:'', color:'hi'},
  {key:'calf', zone:'Calf', dmg:0.4, vel:0.75, note:'', color:'green'},
  {key:'foot', zone:'Foot', dmg:0.3, vel:0.75, note:'', color:'green'},
];

const DAMAGE_TYPE_FLAG_COLORS = {'Explosive':'#7a1a1a','Bypasses Armor':'#5a0a0a','Chemical':'#4a1a7a','Drains Stamina':'#0d4a3a','Burns':'#7a4010'};

const DAMAGE_TYPES = [
  {key:'explosion_remote', type:'Explosion (Remote)', flags:['Explosive'], impulse:12000.0, objx:1.0, note:'IED / remote charges'},
  {key:'bullet_am', type:'Bullet (Anti-Material)', flags:[], impulse:800.0, objx:1.0, note:'AM rifles — .50 BMG, 12.7x108'},
  {key:'explosion_grenade', type:'Explosion (Grenade)', flags:['Explosive'], impulse:12000.0, objx:1.0, note:'Frag grenades'},
  {key:'explosion_rocket', type:'Explosion (Rocket)', flags:['Explosive'], impulse:16000.0, objx:2.0, note:'RPG / AT4 — 2x objective damage'},
  {key:'melee_bash', type:'Melee (Bash)', flags:['Bypasses Armor'], impulse:800.0, objx:1.0, note:'Weapon bash — ignores armor, 30x breakable damage'},
  {key:'explosion_chemical', type:'Explosion (Chemical)', flags:['Chemical','Drains Stamina'], impulse:0.0, objx:1.0, note:'Chemical grenade — drains stamina, causes cough'},
  {key:'explosion_fire', type:'Explosion (Fire)', flags:['Burns'], impulse:0.0, objx:1.0, note:'Incendiary / thermite — applies burn DoT'},
  {key:'explosion_stun', type:'Explosion (Stun)', flags:[], impulse:12000.0, objx:1.0, note:'Flashbang — no blood, no pain sounds'},
  {key:'melee_punch', type:'Melee (Punch)', flags:['Bypasses Armor'], impulse:800.0, objx:1.0, note:'Punch — ignores armor, 30x breakable damage'},
];