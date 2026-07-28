import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

/**
 * 1. GLOBAL THEME – premium, dark, brandable
 */
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#05060A",
    primary: "#4F46E5",
    card: "#0B0D14",
    text: "#F9FAFB",
    border: "#1F2937",
    notification: "#F97316",
  },
};

/**
 * 2. REUSABLE BRAND COMPONENTS
 */

const BrandBadge: React.FC = () => (
  <View style={styles.brandBadge}>
    <Text style={styles.brandBadgeText}>MICROFYXD</Text>
    <Text style={styles.brandBadgeSub}>Autonomous Cognitive Systems</Text>
  </View>
);

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
  </View>
);

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.pill}>
    <Text style={styles.pillText}>{label}</Text>
  </View>
);

/**
 * 3. SCREENS
 */

const DashboardScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <BrandBadge />

        <View style={styles.hero}>
          <View style={styles.heroTextBlock}>
            <Text style={styles.heroTitle}>
              Autonomous Code Evolution, Live.
            </Text>
            <Text style={styles.heroSubtitle}>
              Watch Microfyxd orchestrate agents, refactor code, and deploy
              sandboxes—without human intervention.
            </Text>
            <View style={styles.heroPillsRow}>
              <Pill label="LangGraph Orchestration" />
              <Pill label="Supabase RLS" />
              <Pill label="Termux Runtime" />
            </View>
          </View>

          <View style={styles.heroCard}>
            <Text style={styles.heroCardLabel}>System Status</Text>
            <Text style={styles.heroCardValue}>ONLINE</Text>
            <Text style={styles.heroCardMeta}>Last cycle: 12.7s</Text>

            <View style={styles.heroCardRow}>
              <View style={styles.heroMetric}>
                <Text style={styles.heroMetricLabel}>Agents</Text>
                <Text style={styles.heroMetricValue}>7 active</Text>
              </View>
              <View style={styles.heroMetric}>
                <Text style={styles.heroMetricLabel}>Sandboxes</Text>
                <Text style={styles.heroMetricValue}>3 running</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Trigger Evolution Cycle</Text>
            </TouchableOpacity>
          </View>
        </View>

        <SectionHeader
          title="Live Pipelines"
          subtitle="Every node in the graph is observable, traceable, and replayable."
        />

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lead Scraping</Text>
            <Text style={styles.cardBody}>
              Autonomous discovery of HVAC permit‑based leads with enrichment,
              scoring, and routing.
            </Text>
            <View style={styles.cardFooterRow}>
              <Pill label="Running" />
              <Text style={styles.cardFooterText}>Cycle: 3.2s</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Code Sandbox</Text>
            <Text style={styles.cardBody}>
              Self‑healing environments that generate, test, and patch code
              across micro‑services.
            </Text>
            <View style={styles.cardFooterRow}>
              <Pill label="Stable" />
              <Text style={styles.cardFooterText}>Coverage: 92%</Text>
            </View>
          </View>
        </View>

        <SectionHeader
          title="Presentation Mode"
          subtitle="Optimized for live demos, investor decks, and big‑stage reveals."
        />

        <View style={styles.presentationStrip}>
          <Text style={styles.presentationText}>
            • One‑tap “Show, don’t tell” mode  
            • Real‑time telemetry overlays  
            • Safe demo sandbox with rollback
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AgentsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <SectionHeader
          title="Cognitive Agents"
          subtitle="Each node is a specialized expert with its own memory and policy."
        />

        <View style={styles.agentList}>
          {[
            "Orchestrator",
            "Code Synthesizer",
            "Test Runner",
            "RLS Policy Auditor",
            "Lead Enrichment",
            "Sandbox Guardian",
          ].map((agent) => (
            <View key={agent} style={styles.agentRow}>
              <View style={styles.agentIcon}>
                <Ionicons name="sparkles-outline" size={18} color="#A5B4FC" />
              </View>
              <View style={styles.agentTextBlock}>
                <Text style={styles.agentName}>{agent}</Text>
                <Text style={styles.agentDesc}>
                  Live, observable, and fully pluggable into the Microfyxd
                  autonomy graph.
                </Text>
              </View>
              <View style={styles.agentStatusPill}>
                <Text style={styles.agentStatusText}>ACTIVE</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SystemsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <SectionHeader
          title="Runtime & Integrations"
          subtitle="Termux, Supabase, Azure, and LangGraph—wired for autonomous operation."
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Termux Runtime</Text>
          <Text style={styles.cardBody}>
            Android‑native devops stack with automated pulls, builds, and
            sandbox restarts. Designed for field‑grade autonomy.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Supabase Backend</Text>
          <Text style={styles.cardBody}>
            RLS‑driven data plane with fine‑grained auth, telemetry logging, and
            agent‑level access policies.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Azure / Cloud Hooks</Text>
          <Text style={styles.cardBody}>
            Pluggable cloud execution for heavy workloads, long‑running
            experiments, and cross‑region replication.
          </Text>
        </View>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Open Live Telemetry View</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * 4. ROOT APP – navigation + theme + status bar
 */

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#05060A",
            borderTopColor: "#1F2937",
          },
          tabBarActiveTintColor: "#4F46E5",
          tabBarInactiveTintColor: "#6B7280",
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "grid-outline";

            if (route.name === "Dashboard") iconName = "planet-outline";
            if (route.name === "Agents") iconName = "sparkles-outline";
            if (route.name === "Systems") iconName = "server-outline";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Agents" component={AgentsScreen} />
        <Tab.Screen name="Systems" component={SystemsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/**
 * 5. STYLES
 */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#05060A",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  brandBadge: {
    marginTop: 8,
    marginBottom: 16,
  },
  brandBadgeText: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#F9FAFB",
  },
  brandBadgeSub: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
  hero: {
    flexDirection: "column",
    gap: 16,
    marginBottom: 24,
  },
  heroTextBlock: {
    gap: 10,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#F9FAFB",
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  heroPillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  heroCard: {
    backgroundColor: "#0B0D14",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1F2937",
    gap: 8,
  },
  heroCardLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  heroCardValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#22C55E",
  },
  heroCardMeta: {
    fontSize: 12,
    color: "#6B7280",
  },
  heroCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 12,
  },
  heroMetric: {
    flexDirection: "column",
    gap: 2,
  },
  heroMetricLabel: {
    fontSize: 11,
    color: "#9CA3AF",
  },
  heroMetricValue: {
    fontSize: 13,
    color: "#F9FAFB",
  },
  primaryButton: {
    marginTop: 4,
    backgroundColor: "#4F46E5",
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#F9FAFB",
    fontWeight: "600",
    fontSize: 14,
  },
  sectionHeader: {
    marginTop: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F9FAFB",
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 4,
  },
  cardRow: {
    flexDirection: "column",
    gap: 12,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#0B0D14",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#F9FAFB",
    marginBottom: 4,
  },
  cardBody: {
    fontSize: 13,
    color: "#9CA3AF",
  },
  cardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  cardFooterText: {
    fontSize: 12,
    color: "#6B7280",
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#4F46E5",
  },
  pillText: {
    fontSize: 11,
    color: "#E5E7EB",
  },
  presentationStrip: {
    marginTop: 8,
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#1F2937",
  },
  presentationText: {
    fontSize: 13,
    color: "#D1D5DB",
    lineHeight: 18,
  },
  agentList: {
    marginTop: 8,
    gap: 10,
  },
  agentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#0B0D14",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#1F2937",
    gap: 10,
  },
  agentIcon: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
  },
  agentTextBlock: {
    flex: 1,
    gap: 2,
  },
  agentName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F9FAFB",
  },
  agentDesc: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  agentStatusPill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#064E3B",
  },
  agentStatusText: {
    fontSize: 11,
    color: "#6EE7B7",
    fontWeight: "600",
  },
  secondaryButton: {
    marginTop: 16,
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4F46E5",
  },
  secondaryButtonText: {
    color: "#E5E7EB",
    fontWeight: "600",
    fontSize: 14,
  },
});
